function assignLanes(timelineItems) {
    const lanes = [];
    const laneMap = {};

    timelineItems.forEach(item => {
        const { id, startDate } = item;
        let assignedLane = -1;

        for (let i = 0; i < lanes.length; i++) {
            const lane = lanes[i];
            const lastItemInLane = lane[lane.length - 1];

            if (lastItemInLane && lastItemInLane.endDate < startDate) {
                assignedLane = i;
                break;
            }
        }

        if (assignedLane === -1) {
            assignedLane = lanes.length;
            lanes.push([]);
        }

        lanes[assignedLane].push(item);
        laneMap[id] = assignedLane;
    });

    return lanes;
}

export default assignLanes;