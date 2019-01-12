const env = require('sugar-env')
import { app as factory } from './presentation/app'

const bot = factory({}, env.current)
bot.startPolling()
