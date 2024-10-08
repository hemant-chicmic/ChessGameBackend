
'use strict';

const { WaitingPlayerModel } = require("../models");




const waitingPlayerService = {};


waitingPlayerService.findOne = async (payload) => await WaitingPlayerModel.findOne(payload);

waitingPlayerService.addPlayerToWaitingListInDb = async (payload) => await WaitingPlayerModel.create(payload);


waitingPlayerService.findAllPlayerWaitingForMatchFromDb = async (criteria) => await WaitingPlayerModel.findAll(criteria);


waitingPlayerService.removePlayerFromWaitingListInDb = async (criteria) => await WaitingPlayerModel.destroy(criteria);


module.exports = waitingPlayerService;




