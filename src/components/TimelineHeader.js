import React from 'react';

export const MONTH_WIDTH = 80;

function getMonthMarkers2025() {
    const markers = [];
    for (let month = 1; month <= 12; month++) {
        markers.push({ year: 2025, month });
    }
    return markers;
}

function formatMonth({ year, month }) {
    const date = new Date(year, month - 1, 1);
    return date.toLocaleString('default', { month: 'short', year: 'numeric' });
}

export default function TimelineHeader() {
    const monthMarkers = getMonthMarkers2025();

    return (
        <div style={{ display: 'flex', borderBottom: '1px solid #ccc', paddingBottom: 8 }}>
            {monthMarkers.map((marker, idx) => (
                <div
                    key={idx}
                    style={{
                        width: MONTH_WIDTH,
                        textAlign: 'center',
                        fontSize: 12,
                        color: '#555',
                        borderLeft: idx === 0 ? 'none' : '1px solid #eee'
                    }}
                >
                    {formatMonth(marker)}
                </div>
            ))}
        </div>
    );
}