import chalk from 'chalk'

export default function(args){
    if(! args.template) {
        console.log('%s: missing something ?', chalk.red.bold('ERROR'))
        console.log(args)
    }

    console.log('Processing...')
    
}