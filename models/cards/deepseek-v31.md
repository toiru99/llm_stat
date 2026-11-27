---
type: Model
title: DeepSeek V3.1
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.4693
output_speed_tps: 83.6201263189671
context_window: 128000
status: past
size_class: Large
params_b: 685
is_reasoning: true
radar:
  knowledge: { s: 52.7, z: 0.29, r: 54.3, estimated: false }  # 전문 지식
  reasoning: { s: 34.1, z: -0.05, r: 49.2, estimated: false }  # 추론
  coding: { s: 37.9, z: -0.11, r: 48.4, estimated: false }  # 코딩
  agentic: { s: 37.8, z: -0.33, r: 45.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 63.9, z: 0.19, r: 52.9, estimated: false }  # 긴문맥
  instruction: { s: 41.3, z: -0.38, r: 44.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# DeepSeek V3.1

DeepSeek · Open · Large(685B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $0.425 · 출력 $1.3399999999999999 · 혼합 $0.4693/1M · 83.6201263189671 t/s · TTFT 2.84305511594442s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 54.3 | +0.29 | 실측 | [[gpqa-diamond]] 77.8788%×0.4, [[humanitys-last-exam]] 14.2725%×0.3 |
| 추론 | 49.2 | -0.05 | 실측 | [[critpt]] 2%×1.0, [[gpqa-diamond]] 77.8788%×1.0, [[humanitys-last-exam]] 14.2725%×1.0 |
| 코딩 | 48.4 | -0.11 | 실측 | [[terminal-bench]] 25%×0.5 |
| 에이전트 | 45.1 | -0.33 | 실측 | [[tau2-bench]] 37.4269%×1.0, [[terminal-bench]] 25%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 52.9 | +0.19 | 실측 | [[aa-lcr]] 56.6667%×1.0 |
| 지시 따르기 | 44.3 | -0.38 | 실측 | [[ifbench]] 41.4966%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
