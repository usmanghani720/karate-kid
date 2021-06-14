class StateLoader {

    loadState() {
        try {
            let serializedState = sessionStorage.getItem("https://virtual.militaryx.com:state");

            if (serializedState === null) {
                return this.initializeState();
            }

            return JSON.parse(serializedState);
        }
        catch (err) {
            return this.initializeState();
        }
    }

    saveState(state) {
        try {
            let serializedState = JSON.stringify(state);
            sessionStorage.setItem("https://virtual.militaryx.com:state", serializedState);

        }
        catch (err) {
        }
    }

    initializeState() {
        return {
            }
        };
    }

export default StateLoader