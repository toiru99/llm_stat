---
type: Model
title: Command A
creator: Cohere
license: Open
intelligence_index: None
price_blended_usd_1m: 3.25
output_speed_tps: 66.4060947280825
context_window: 256000
status: past
size_class: Medium
params_b: 111
is_reasoning: false
radar:
  knowledge: { s: 30.1, z: -0.81, r: 37.8, estimated: false }  # 전문 지식
  reasoning: { s: 17.9, z: -0.86, r: 37.1, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.35, r: 29.8, estimated: false }  # 코딩
  agentic: { s: 8.2, z: -1.37, r: 29.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 24.1, z: -1.03, r: 34.5, estimated: false }  # 긴문맥
  instruction: { s: 34.2, z: -0.68, r: 39.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Command A
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Command A

Cohere · Open · Medium(111B) · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $2.5 · 출력 $10.0 · 혼합 $3.25/1M · 66.4060947280825 t/s · TTFT 5.14821922957506s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 37.8 | -0.81 | 실측 | [[gpqa-diamond]] 52.7273%×0.4, [[humanitys-last-exam]] 4.03151%×0.3 |
| 추론 | 37.1 | -0.86 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 52.7273%×1.0, [[humanitys-last-exam]] 4.03151%×1.0 |
| 코딩 | 29.8 | -1.35 | 실측 | [[terminal-bench]] 0.757576%×0.5 |
| 에이전트 | 29.4 | -1.37 | 실측 | [[tau2-bench]] 15.2047%×1.0, [[terminal-bench]] 0.757576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.5 | -1.03 | 실측 | [[aa-lcr]] 21.3333%×1.0 |
| 지시 따르기 | 39.9 | -0.68 | 실측 | [[ifbench]] 36.4626%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
