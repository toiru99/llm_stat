---
type: Model
title: DeepSeek V3 (Dec)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.377
output_speed_tps: 93.4003513336433
context_window: 128000
status: past
size_class: Large
params_b: 671
is_reasoning: false
radar:
  knowledge: { s: 31.4, z: -0.75, r: 38.8, estimated: false }  # 전문 지식
  reasoning: { s: 18.5, z: -0.83, r: 37.6, estimated: false }  # 추론
  coding: { s: 35.1, z: -0.2, r: 47.0, estimated: false }  # 코딩
  agentic: { s: 14.8, z: -1.14, r: 32.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 33.1, z: -0.75, r: 38.7, estimated: false }  # 긴문맥
  instruction: { s: 31.8, z: -0.77, r: 38.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3 (Dec)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# DeepSeek V3 (Dec)

DeepSeek · Open · Large(671B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.32 · 출력 $0.89 · 혼합 $0.377/1M · 93.4003513336433 t/s · TTFT 0.983397196447479s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 38.8 | -0.75 | 실측 | [[gpqa-diamond]] 55.6566%×0.4, [[humanitys-last-exam]] 2.9%×0.3 |
| 추론 | 37.6 | -0.83 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 55.6566%×1.0, [[humanitys-last-exam]] 2.9%×1.0 |
| 코딩 | 47.0 | -0.2 | 실측 | [[scicode]] 35.7639%×1.0, [[terminal-bench]] 6.81818%×0.5 |
| 에이전트 | 32.9 | -1.14 | 실측 | [[gdpval]] -21.62 Elo×1.0, [[tau2-bench]] 22.807%×1.0, [[tau3-banking]] 4.74227%×1.0, [[terminal-bench]] 6.81818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.7 | -0.75 | 실측 | [[aa-lcr]] 29.3333%×1.0 |
| 지시 따르기 | 38.4 | -0.77 | 실측 | [[ifbench]] 34.7619%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
