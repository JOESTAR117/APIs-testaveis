import supertest from 'supertest'
import chai from 'chai'
import app from '../../src/app.js'

global.app = app
global.request = supertest
global.expect = chai.expect
