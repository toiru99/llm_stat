---
type: Model
title: GPT-6.1 Sol (low)
creator: OpenAI
license: Proprietary
intelligence_index: 34.8029244314559
price_blended_usd_1m: 1.47
output_speed_tps: 52.6168038038039
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.2, z: 0.8, r: 62.0, estimated: false }  # 전문 지식
  reasoning: { s: 66.4, z: 1.55, r: 73.3, estimated: false }  # 추론
  coding: { s: 76.2, z: 1.18, r: 67.8, estimated: false }  # 코딩
  agentic: { s: 76.0, z: 1.02, r: 65.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 91.5, z: 1.03, r: 65.4, estimated: false }  # 멀티모달
  long_context: { s: 94.7, z: 1.13, r: 67.0, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Sol (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-6.1 Sol (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **34.8029244314559** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 52.6168038038039 t/s · TTFT 2.78353712606665s · 1M ctx` · 가성비 23.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 62.0 | +0.8 | 실측 | [[humanitys-last-exam]] 47.3587%×0.3 |
| 추론 | 73.3 | +1.55 | 실측 | [[critpt]] 24.8571%×1.0, [[humanitys-last-exam]] 47.3587%×1.0 |
| 코딩 | 67.8 | +1.18 | 실측 | [[scicode]] 53.2407%×1.0 |
| 에이전트 | 65.3 | +1.02 | 실측 | [[gdpval]] 1321.54 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 65.4 | +1.03 | 실측 | [[mmmu-pro]] 83.1214%×1.0 |
| 긴문맥 | 67.0 | +1.13 | 실측 | [[aa-lcr]] 84%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
