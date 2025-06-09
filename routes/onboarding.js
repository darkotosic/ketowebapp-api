const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// POST /api/onboarding/save
router.post('/save', async (req, res) => {
    try {
        const data = req.body;

        // Example: Save basic onboarding data (you will adjust this to your schema)
        const user = await prisma.user.create({
            data: {
                gender: data.gender,
                age: data.age,
                height: data.height,
                weight: data.weight,
                targetWeight: data.targetWeight,
                activityLevel: data.activityLevel,
                goals: data.goals,
                foodPreferences: data.foodPreferences,
                experienceLevel: data.experienceLevel
            }
        });

        res.status(200).json({ success: true, user });
    } catch (error) {
        console.error('Backend error:', error.message);
        if (error.meta) {
            console.error('Meta:', error.meta);
        }
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
