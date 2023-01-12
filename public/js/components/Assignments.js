import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js"
export default {
    components: {AssignmentList, AssignmentCreate},
    template: `
        <section class="flex gap-8">
            <assignment-list :assignments="filters.inProgress" title="In Progress">
                <assignment-create @add="add"></assignment-create>
            </assignment-list>
            <assignment-list 
                :assignments="filters.completed" 
                title="Completed" 
                can-toggle
                @toggle="showList = !showList"
                v-if="showList"></assignment-list>      
            
        </section>
    `,
    data() {
        return {
            assignments: [],
            showList: true
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