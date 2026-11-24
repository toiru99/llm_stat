---
type: Model
title: GPT-5.6 Luna (max)
creator: OpenAI
license: Proprietary
intelligence_index: 23.7902433286348
price_blended_usd_1m: 0.174
output_speed_tps: 97.7300200425772
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.2, z: 1.43, r: 71.5, estimated: false }  # 전문 지식
  reasoning: { s: 68.0, z: 1.63, r: 74.5, estimated: false }  # 추론
  coding: { s: 76.8, z: 1.2, r: 68.1, estimated: false }  # 코딩
  agentic: { s: 71.5, z: 0.86, r: 62.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.4, z: 0.72, r: 60.7, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.12, r: 66.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-5.6 Luna (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **23.7902433286348** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 97.7300200425772 t/s · TTFT 44.4421558605111s · 1M ctx` · 가성비 136.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 71.5 | +1.43 | 실측 | [[gpqa-diamond]] 91.1111%×0.4, [[humanitys-last-exam]] 39.481%×0.3 |
| 추론 | 74.5 | +1.63 | 실측 | [[critpt]] 20.5714%×1.0, [[gpqa-diamond]] 91.1111%×1.0, [[humanitys-last-exam]] 39.481%×1.0 |
| 코딩 | 68.1 | +1.2 | 실측 | [[scicode]] 53.588%×1.0 |
| 에이전트 | 62.9 | +0.86 | 실측 | [[gdpval]] 1469.51 Elo×1.0, [[tau3-banking]] 31.134%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.7 | +0.72 | 실측 | [[mmmu-pro]] 78.5549%×1.0 |
| 긴문맥 | 66.8 | +1.12 | 실측 | [[aa-lcr]] 83.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
