---
type: Model
title: GPT-5.6 Luna (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.174
output_speed_tps: 111.479270683926
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.7, z: 1.31, r: 69.6, estimated: false }  # 전문 지식
  reasoning: { s: 66.3, z: 1.55, r: 73.2, estimated: false }  # 추론
  coding: { s: 71.6, z: 1.03, r: 65.5, estimated: false }  # 코딩
  agentic: { s: 67.7, z: 0.73, r: 60.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.4, z: 0.72, r: 60.7, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.05, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# GPT-5.6 Luna (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 111.479270683926 t/s · TTFT 18.1458247244678s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 69.6 | +1.31 | 실측 | [[gpqa-diamond]] 89.4949%×0.4, [[humanitys-last-exam]] 36.9787%×0.3 |
| 추론 | 73.2 | +1.55 | 실측 | [[critpt]] 20.5714%×1.0, [[gpqa-diamond]] 89.4949%×1.0, [[humanitys-last-exam]] 36.9787%×1.0 |
| 코딩 | 65.5 | +1.03 | 실측 | [[scicode]] 50.463%×1.0 |
| 에이전트 | 60.9 | +0.73 | 실측 | [[gdpval]] 1406.41 Elo×1.0, [[tau3-banking]] 28.6598%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.7 | +0.72 | 실측 | [[mmmu-pro]] 78.5549%×1.0 |
| 긴문맥 | 65.8 | +1.05 | 실측 | [[aa-lcr]] 81.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
