import marked from 'marked'
import TerminalRenderer from 'marked-terminal';
import fs from 'fs'
  
export default () => {

    marked.setOptions({
        renderer: new TerminalRenderer()
      });
      
    try {
        const data = fs.readFileSync('HELP.md', 'utf8')
        console.log(marked(data))
      } catch (err) {
        console.error(err)
      }
}
