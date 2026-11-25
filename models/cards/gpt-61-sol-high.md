---
type: Model
title: GPT-6.1 Sol (high)
creator: OpenAI
license: Proprietary
intelligence_index: 50.2786181431485
price_blended_usd_1m: 1.47
output_speed_tps: 52.3101794970087
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 68.7, z: 1.07, r: 66.0, estimated: false }  # 전문 지식
  reasoning: { s: 76.4, z: 2.05, r: 80.7, estimated: false }  # 추론
  coding: { s: 80.4, z: 1.33, r: 69.9, estimated: false }  # 코딩
  agentic: { s: 84.8, z: 1.33, r: 69.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.9, z: 1.15, r: 67.2, estimated: false }  # 멀티모달
  long_context: { s: 92.9, z: 1.08, r: 66.1, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Sol (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# GPT-6.1 Sol (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.2786181431485** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 52.3101794970087 t/s · TTFT 37.1048011759195s · 1M ctx` · 가성비 34.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 66.0 | +1.07 | 실측 | [[humanitys-last-exam]] 51.3902%×0.3 |
| 추론 | 80.7 | +2.05 | 실측 | [[critpt]] 30%×1.0, [[humanitys-last-exam]] 51.3902%×1.0 |
| 코딩 | 69.9 | +1.33 | 실측 | [[scicode]] 55.787%×1.0 |
| 에이전트 | 69.9 | +1.33 | 실측 | [[gdpval]] 1521.54 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.2 | +1.15 | 실측 | [[mmmu-pro]] 84.9133%×1.0 |
| 긴문맥 | 66.1 | +1.08 | 실측 | [[aa-lcr]] 82.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
