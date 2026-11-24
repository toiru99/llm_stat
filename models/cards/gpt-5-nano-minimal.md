---
type: Model
title: GPT-5 nano (minimal)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.0535
output_speed_tps: 124.144674022292
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 23.5, z: -1.13, r: 33.1, estimated: false }  # 전문 지식
  reasoning: { s: 14.1, z: -1.05, r: 34.3, estimated: false }  # 추론
  coding: { s: 10.3, z: -1.04, r: 34.5, estimated: false }  # 코딩
  agentic: { s: 18.2, z: -1.02, r: 34.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 23.1, z: -2.47, r: 13.0, estimated: false }  # 멀티모달
  long_context: { s: 22.6, z: -1.08, r: 33.8, estimated: false }  # 긴문맥
  instruction: { s: 28.7, z: -0.91, r: 36.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 nano (minimal)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-5 nano (minimal)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $0.05 · 출력 $0.4 · 혼합 $0.0535/1M · 124.144674022292 t/s · TTFT 1.32295414510944s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 33.1 | -1.13 | 실측 | [[gpqa-diamond]] 42.8283%×0.4, [[humanitys-last-exam]] 3.98517%×0.3 |
| 추론 | 34.3 | -1.05 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 42.8283%×1.0, [[humanitys-last-exam]] 3.98517%×1.0 |
| 코딩 | 34.5 | -1.04 | 실측 | [[terminal-bench]] 6.81818%×0.5 |
| 에이전트 | 34.7 | -1.02 | 실측 | [[tau2-bench]] 25.731%×1.0, [[terminal-bench]] 6.81818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 13.0 | -2.47 | 실측 | [[mmmu-pro]] 31.7919%×1.0 |
| 긴문맥 | 33.8 | -1.08 | 실측 | [[aa-lcr]] 20%×1.0 |
| 지시 따르기 | 36.4 | -0.91 | 실측 | [[ifbench]] 32.517%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
