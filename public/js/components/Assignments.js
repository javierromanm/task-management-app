import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js"
export default {
    components: {AssignmentList, AssignmentCreate},
    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>      
            <assignment-create @add="add"></assignment-create>
        </section>
    `,
    data() {
        return {
            assignments: []
        }
    },
    created() {
        fetch('http://localhost:3001/assignments')
            .then (response => response.json())
            .then (assignments => {
                this.assignments = assignments
            })
    },
    computed: {        
        filters() {
            return {
                inProgress: this.assignments.filter(a => ! a.completed),
                completed: this.assignments.filter(a => a.completed)
            }            
        }
    },
    methods: {
        add(task) {
            this.assignments.push({
                name: task,
                completed: false,
                id: this.assignments.length + 1
            })
        }
    }
}