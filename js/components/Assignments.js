import AssignmentList from "./AssignmentList.js"
export default {
    components: {AssignmentList},
    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>        
        </section>
    `,
    data() {
        return {
            assignments: [
                { name: 'Task 1', completed: false, id: 1},
                { name: 'Task 2', completed: false, id: 2},
                { name: 'Task 3', completed: false, id: 3}
            ]
        }
    },
    computed: {        
        filters() {
            return {
                inProgress: this.assignments.filter(a => ! a.completed),
                completed: this.assignments.filter(a => a.completed)
            }            
        }
    } 
}