---
type: Model
title: Qwen3 VL 235B A22B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: past
size_class: Large
params_b: 235
is_reasoning: true
radar:
  knowledge: { s: 50.9, z: 0.2, r: 53.0, estimated: false }  # 전문 지식
  reasoning: { s: 30.9, z: -0.21, r: 46.8, estimated: false }  # 추론
  coding: { s: 17.2, z: -0.8, r: 38.0, estimated: false }  # 코딩
  agentic: { s: 35.9, z: -0.39, r: 44.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 72.3, z: 0.05, r: 50.7, estimated: false }  # 멀티모달
  long_context: { s: 71.8, z: 0.43, r: 56.5, estimated: false }  # 긴문맥
  instruction: { s: 62.3, z: 0.49, r: 57.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 235B A22B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Qwen3 VL 235B A22B

Alibaba · Open · Large(235B) · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 53.0 | +0.2 | 실측 | [[gpqa-diamond]] 77.1717%×0.4, [[humanitys-last-exam]] 11.9092%×0.3 |
| 추론 | 46.8 | -0.21 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 77.1717%×1.0, [[humanitys-last-exam]] 11.9092%×1.0 |
| 코딩 | 38.0 | -0.8 | 실측 | [[terminal-bench]] 11.3636%×0.5 |
| 에이전트 | 44.1 | -0.39 | 실측 | [[tau2-bench]] 54.0936%×1.0, [[terminal-bench]] 11.3636%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 50.7 | +0.05 | 실측 | [[mmmu-pro]] 68.7283%×1.0 |
| 긴문맥 | 56.5 | +0.43 | 실측 | [[aa-lcr]] 63.6667%×1.0 |
| 지시 따르기 | 57.4 | +0.49 | 실측 | [[ifbench]] 56.4626%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
