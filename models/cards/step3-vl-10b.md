---
type: Model
title: Step3 VL 10B
creator: StepFun
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 65536
status: current
size_class: Small
params_b: 10.2
is_reasoning: true
radar:
  knowledge: { s: 44.8, z: -0.09, r: 48.6, estimated: false }  # 전문 지식
  reasoning: { s: 27.3, z: -0.39, r: 44.1, estimated: false }  # 추론
  coding: { s: 8.0, z: -1.11, r: 33.3, estimated: false }  # 코딩
  agentic: { s: 12.1, z: -1.23, r: 31.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 66.0, z: -0.28, r: 45.9, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 53.5, z: 0.13, r: 51.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step3 VL 10B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Step3 VL 10B

StepFun · Open · Small(10.2B) · 컨텍스트 65k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 65k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 48.6 | -0.09 | 실측 | [[gpqa-diamond]] 68.9899%×0.4, [[humanitys-last-exam]] 10.8434%×0.3 |
| 추론 | 44.1 | -0.39 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 68.9899%×1.0, [[humanitys-last-exam]] 10.8434%×1.0 |
| 코딩 | 33.3 | -1.11 | 실측 | [[terminal-bench]] 5.30303%×0.5 |
| 에이전트 | 31.5 | -1.23 | 실측 | [[tau2-bench]] 16.0819%×1.0, [[terminal-bench]] 5.30303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 45.9 | -0.28 | 실측 | [[mmmu-pro]] 63.9884%×1.0 |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 51.9 | +0.13 | 실측 | [[ifbench]] 50.2041%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
