import Assignments from "./Assignments.js"
import Panel from "./Panel.js"
export default {
    template: `
        <div class="grid gap-6">
            <h1 class="mb-5">Task Management App</h1>
            <assignments></assignments> 
        </div>
    `,
    components: {Assignments, Panel} 
}