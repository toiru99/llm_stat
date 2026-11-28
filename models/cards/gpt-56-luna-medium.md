---
type: Model
title: GPT-5.6 Luna (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.174
output_speed_tps: 94.9675114038824
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.7, z: 0.87, r: 63.1, estimated: false }  # 전문 지식
  reasoning: { s: 45.1, z: 0.49, r: 57.4, estimated: false }  # 추론
  coding: { s: 65.5, z: 0.82, r: 62.4, estimated: false }  # 코딩
  agentic: { s: 51.1, z: 0.14, r: 52.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 81.8, z: 0.53, r: 58.0, estimated: false }  # 멀티모달
  long_context: { s: 84.6, z: 0.82, r: 62.3, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# GPT-5.6 Luna (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 94.9675114038824 t/s · TTFT 2.73109559123047s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 63.1 | +0.87 | 실측 | [[gpqa-diamond]] 85.8586%×0.4, [[humanitys-last-exam]] 25.7646%×0.3 |
| 추론 | 57.4 | +0.49 | 실측 | [[critpt]] 4.85714%×1.0, [[gpqa-diamond]] 85.8586%×1.0, [[humanitys-last-exam]] 25.7646%×1.0 |
| 코딩 | 62.4 | +0.82 | 실측 | [[scicode]] 46.7593%×1.0 |
| 에이전트 | 52.1 | +0.14 | 실측 | [[gdpval]] 1137.51 Elo×1.0, [[tau3-banking]] 17.732%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.0 | +0.53 | 실측 | [[mmmu-pro]] 75.8382%×1.0 |
| 긴문맥 | 62.3 | +0.82 | 실측 | [[aa-lcr]] 75%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
