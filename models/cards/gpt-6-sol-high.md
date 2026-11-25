---
type: Model
title: GPT-6 Sol (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 107.069490771739
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 58.8, z: 0.58, r: 58.8, estimated: false }  # 전문 지식
  reasoning: { s: 65.0, z: 1.48, r: 72.2, estimated: false }  # 추론
  coding: { s: 78.9, z: 1.27, r: 69.1, estimated: false }  # 코딩
  agentic: { s: 79.5, z: 1.14, r: 67.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 90.0, z: 0.95, r: 64.2, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.12, r: 66.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# GPT-6 Sol (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 107.069490771739 t/s · TTFT 5.8977149829862s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 58.8 | +0.58 | 실측 | [[humanitys-last-exam]] 44.1149%×0.3 |
| 추론 | 72.2 | +1.48 | 실측 | [[critpt]] 25.4286%×1.0, [[humanitys-last-exam]] 44.1149%×1.0 |
| 코딩 | 69.1 | +1.27 | 실측 | [[scicode]] 54.8611%×1.0 |
| 에이전트 | 67.2 | +1.14 | 실측 | [[gdpval]] 1402 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 64.2 | +0.95 | 실측 | [[mmmu-pro]] 81.9653%×1.0 |
| 긴문맥 | 66.8 | +1.12 | 실측 | [[aa-lcr]] 83.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
