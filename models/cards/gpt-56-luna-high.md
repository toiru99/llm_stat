---
type: Model
title: GPT-5.6 Luna (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.174
output_speed_tps: 97.9801274299212
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.4, z: 1.2, r: 68.0, estimated: false }  # 전문 지식
  reasoning: { s: 60.8, z: 1.27, r: 69.1, estimated: false }  # 추론
  coding: { s: 73.5, z: 1.09, r: 66.4, estimated: false }  # 코딩
  agentic: { s: 62.8, z: 0.55, r: 58.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 84.1, z: 0.65, r: 59.7, estimated: false }  # 멀티모달
  long_context: { s: 90.6, z: 1.01, r: 65.1, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# GPT-5.6 Luna (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 97.9801274299212 t/s · TTFT 8.01985384849723s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 68.0 | +1.2 | 실측 | [[gpqa-diamond]] 89.1919%×0.4, [[humanitys-last-exam]] 33.4106%×0.3 |
| 추론 | 69.1 | +1.27 | 실측 | [[critpt]] 16.5714%×1.0, [[gpqa-diamond]] 89.1919%×1.0, [[humanitys-last-exam]] 33.4106%×1.0 |
| 코딩 | 66.4 | +1.09 | 실측 | [[scicode]] 51.6204%×1.0 |
| 에이전트 | 58.2 | +0.55 | 실측 | [[gdpval]] 1338.39 Elo×1.0, [[tau3-banking]] 25.1546%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 59.7 | +0.65 | 실측 | [[mmmu-pro]] 77.5723%×1.0 |
| 긴문맥 | 65.1 | +1.01 | 실측 | [[aa-lcr]] 80.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
