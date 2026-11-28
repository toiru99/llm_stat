---
type: Model
title: GLM-4.6 (non-reasoning)
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.5835
output_speed_tps: 56.8819531734516
context_window: 200000
status: past
size_class: Large
params_b: 357
is_reasoning: false
radar:
  knowledge: { s: 37.9, z: -0.43, r: 43.5, estimated: false }  # 전문 지식
  reasoning: { s: 22.6, z: -0.62, r: 40.6, estimated: false }  # 추론
  coding: { s: 43.7, z: 0.09, r: 51.3, estimated: false }  # 코딩
  agentic: { s: 60.6, z: 0.47, r: 57.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 29.7, z: -0.86, r: 37.1, estimated: false }  # 긴문맥
  instruction: { s: 34.6, z: -0.66, r: 40.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.6 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# GLM-4.6 (non-reasoning)

Z AI · Open · Large(357B) · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.575 · 출력 $2.2 · 혼합 $0.5835/1M · 56.8819531734516 t/s · TTFT 2.41025234712781s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 43.5 | -0.43 | 실측 | [[gpqa-diamond]] 63.2323%×0.4, [[humanitys-last-exam]] 5.46803%×0.3 |
| 추론 | 40.6 | -0.62 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 63.2323%×1.0, [[humanitys-last-exam]] 5.46803%×1.0 |
| 코딩 | 51.3 | +0.09 | 실측 | [[terminal-bench]] 28.7879%×0.5 |
| 에이전트 | 57.1 | +0.47 | 실측 | [[tau2-bench]] 76.9006%×1.0, [[terminal-bench]] 28.7879%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.1 | -0.86 | 실측 | [[aa-lcr]] 26.3333%×1.0 |
| 지시 따르기 | 40.1 | -0.66 | 실측 | [[ifbench]] 36.7347%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
