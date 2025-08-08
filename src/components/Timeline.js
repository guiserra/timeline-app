import React from 'react';
import timelineItems from '../timelineItems';
import TimelineHeader, { MONTH_WIDTH } from './TimelineHeader';

function getMonthIndex(dateStr) {
    const date = new Date(dateStr);
    return date.getMonth();
}

function getLane(items, item) {
    let lane = 0;
    for (const other of items) {
        if (other === item) break;
        const otherStart = getMonthIndex(other.startDate);
        const otherEnd = getMonthIndex(other.endDate);
        const itemStart = getMonthIndex(item.startDate);
        const itemEnd = getMonthIndex(item.endDate);
        if (
            (itemStart <= otherEnd && itemEnd >= otherStart)
        ) {
            lane++;
        }
    }
    return lane;
}

export default function Timeline() {
    return (
        <div>
            <TimelineHeader />
            <div style={{ position: 'relative', height: 200 }}>
                {timelineItems.map((item, idx) => {
                    const startIdx = getMonthIndex(item.startDate);
                    const endIdx = getMonthIndex(item.endDate);
                    const lane = getLane(timelineItems.slice(0, idx), item);

                    function formatMMDD(dateStr) {
                        const date = new Date(dateStr);
                        const mm = String(date.getMonth() + 1).padStart(2, '0');
                        const dd = String(date.getDate()).padStart(2, '0');
                        return `${mm}-${dd}`;
                    }

                    return (
                        <div
                            key={idx}
                            style={{
                                position: 'absolute',
                                left: startIdx * MONTH_WIDTH,
                                top: lane * 120 + 10,
                                width: (endIdx - startIdx + 1) * MONTH_WIDTH - 8,
                                minHeight: 32,
                                background: '#e3f2fd',
                                border: '1px solid #90caf9',
                                borderRadius: 4,
                                padding: 8,
                                boxSizing: 'border-box',
                                overflow: 'hidden',
                                wordBreak: 'break-word'
                            }}
                        >
                            <small style={{ color: '#555', fontSize: 9 }}>
                                {formatMMDD(item.startDate)} / {formatMMDD(item.endDate)}
                            </small>
                            <br />
                            {item.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}