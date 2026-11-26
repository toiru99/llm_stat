---
type: Model
title: GPT-5.4 mini (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.6525
output_speed_tps: 117.871508895984
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 36.4, z: -0.5, r: 42.4, estimated: false }  # 전문 지식
  reasoning: { s: 21.8, z: -0.66, r: 40.0, estimated: false }  # 추론
  coding: { s: 27.6, z: -0.45, r: 43.2, estimated: false }  # 코딩
  agentic: { s: 31.7, z: -0.54, r: 41.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 61.3, z: -0.52, r: 42.3, estimated: false }  # 멀티모달
  long_context: { s: 41.7, z: -0.49, r: 42.7, estimated: false }  # 긴문맥
  instruction: { s: 37.5, z: -0.54, r: 42.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 mini (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GPT-5.4 mini (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $0.75 · 출력 $4.5 · 혼합 $0.6525/1M · 117.871508895984 t/s · TTFT 1.18500794950829s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 42.4 | -0.5 | 실측 | [[gpqa-diamond]] 60.6061%×0.4, [[humanitys-last-exam]] 5.88508%×0.3 |
| 추론 | 40.0 | -0.66 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 60.6061%×1.0, [[humanitys-last-exam]] 5.88508%×1.0 |
| 코딩 | 43.2 | -0.45 | 실측 | [[terminal-bench]] 18.1818%×0.5 |
| 에이전트 | 41.9 | -0.54 | 실측 | [[gdpval]] 596.89 Elo×1.0, [[tau2-bench]] 23.3918%×1.0, [[terminal-bench]] 18.1818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 42.3 | -0.52 | 실측 | [[mmmu-pro]] 60.4624%×1.0 |
| 긴문맥 | 42.7 | -0.49 | 실측 | [[aa-lcr]] 37%×1.0 |
| 지시 따르기 | 42.0 | -0.54 | 실측 | [[ifbench]] 38.8435%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
