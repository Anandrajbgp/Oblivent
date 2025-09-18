import { NextResponse } from 'next/server';

// Helper function to get dynamic count based on days passed
function getBaseCount(baseValue: number, startDate: string = "2024-01-01"): number {
  const today = new Date();
  const start = new Date(startDate);
  const daysPassed = Math.floor(
    (today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  );
  return baseValue + daysPassed;
}

// Simulate real-time variations (±5% random variation)
function addRealtimeVariation(baseValue: number): number {
  const variation = 0.05; // 5% variation
  const randomFactor = 1 + (Math.random() - 0.5) * 2 * variation;
  return Math.floor(baseValue * randomFactor);
}

export async function GET() {
  try {
    // Base stats with daily growth
    const baseStats = {
      totalPayouts: getBaseCount(47500000), // ₹4.75 crores base
      activeAffiliates: getBaseCount(8500), // 8,500 base
      todaysConversions: getBaseCount(1250), // 1,250 base
      studentsEnrolled: getBaseCount(75000), // 75,000 base
      weeklySignups: Math.floor(Math.random() * 50) + 120, // 120-170 range
      liveUsers: Math.floor(Math.random() * 200) + 450 // 450-650 range
    };

    // Add real-time variations
    const liveStats = {
      totalPayouts: addRealtimeVariation(baseStats.totalPayouts),
      activeAffiliates: addRealtimeVariation(baseStats.activeAffiliates),
      todaysConversions: addRealtimeVariation(baseStats.todaysConversions),
      studentsEnrolled: addRealtimeVariation(baseStats.studentsEnrolled),
      weeklySignups: baseStats.weeklySignups,
      liveUsers: baseStats.liveUsers,
      lastUpdated: new Date().toISOString(),
      uptime: 99.9,
      platformRating: 4.8
    };

    return NextResponse.json(liveStats);
  } catch (error) {
    console.error('Error fetching elearning stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}