export default {
	methods: {
		array_count(value) {
            if (!value) { return 0; }

            if (Array.isArray(value)) {
                return value.length;
            }
            
            return 0;
        },
	}
}