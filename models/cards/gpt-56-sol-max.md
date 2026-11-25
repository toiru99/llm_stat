---
type: Model
title: GPT-5.6 Sol (max)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.08
output_speed_tps: 105.873848918376
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 84.1, z: 1.81, r: 77.2, estimated: false }  # 전문 지식
  reasoning: { s: 84.7, z: 2.46, r: 86.9, estimated: false }  # 추론
  coding: { s: 88.3, z: 1.59, r: 73.9, estimated: false }  # 코딩
  agentic: { s: 90.3, z: 1.52, r: 72.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 91.9, z: 1.05, r: 65.7, estimated: false }  # 멀티모달
  long_context: { s: 94.7, z: 1.13, r: 67.0, estimated: false }  # 긴문맥
  instruction: { s: 85.0, z: 1.44, r: 71.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# GPT-5.6 Sol (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 105.873848918376 t/s · TTFT 36.9252489999527s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 77.2 | +1.81 | 실측 | [[gpqa-diamond]] 94.1414%×0.4, [[humanitys-last-exam]] 49.4903%×0.3 |
| 추론 | 86.9 | +2.46 | 실측 | [[critpt]] 32.2857%×1.0, [[gpqa-diamond]] 94.1414%×1.0, [[humanitys-last-exam]] 49.4903%×1.0 |
| 코딩 | 73.9 | +1.59 | 실측 | [[scicode]] 57.0602%×1.0, [[terminal-bench]] 65.9091%×0.5 |
| 에이전트 | 72.9 | +1.52 | 실측 | [[gdpval]] 1619.22 Elo×1.0, [[tau2-bench]] 85.0877%×1.0, [[tau3-banking]] 44.3299%×1.0, [[terminal-bench]] 65.9091%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 65.7 | +1.05 | 실측 | [[mmmu-pro]] 83.4104%×1.0 |
| 긴문맥 | 67.0 | +1.13 | 실측 | [[aa-lcr]] 84%×1.0 |
| 지시 따르기 | 71.6 | +1.44 | 실측 | [[ifbench]] 72.6531%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
