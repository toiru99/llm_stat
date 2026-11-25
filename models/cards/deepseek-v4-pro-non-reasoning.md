---
type: Model
title: DeepSeek V4 Pro (non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.7975
output_speed_tps: 140.413270655436
context_window: 1000000
status: past
size_class: Large
params_b: 1600
is_reasoning: false
radar:
  knowledge: { s: 45.1, z: -0.08, r: 48.8, estimated: false }  # 전문 지식
  reasoning: { s: 27.9, z: -0.36, r: 44.6, estimated: false }  # 추론
  coding: { s: 55.2, z: 0.48, r: 57.1, estimated: false }  # 코딩
  agentic: { s: 73.6, z: 0.93, r: 64.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 59.8, z: 0.06, r: 51.0, estimated: false }  # 긴문맥
  instruction: { s: 47.3, z: -0.13, r: 48.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# DeepSeek V4 Pro (non-reasoning)

DeepSeek · Open · Large(1600B) · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $1.74 · 출력 $3.48 · 혼합 $0.7975/1M · 140.413270655436 t/s · TTFT 7.752850141345555s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 48.8 | -0.08 | 실측 | [[gpqa-diamond]] 71.7172%×0.4, [[humanitys-last-exam]] 8.24838%×0.3 |
| 추론 | 44.6 | -0.36 | 실측 | [[critpt]] 0.857143%×1.0, [[gpqa-diamond]] 71.7172%×1.0, [[humanitys-last-exam]] 8.24838%×1.0 |
| 코딩 | 57.1 | +0.48 | 실측 | [[terminal-bench]] 36.3636%×0.5 |
| 에이전트 | 64.0 | +0.93 | 실측 | [[tau2-bench]] 91.2281%×1.0, [[terminal-bench]] 36.3636%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 51.0 | +0.06 | 실측 | [[aa-lcr]] 53%×1.0 |
| 지시 따르기 | 48.0 | -0.13 | 실측 | [[ifbench]] 45.7823%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
