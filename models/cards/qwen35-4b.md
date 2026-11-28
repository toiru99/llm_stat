---
type: Model
title: Qwen3.5 4B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: current
size_class: Small
params_b: 4.7
is_reasoning: true
radar:
  knowledge: { s: 49.6, z: 0.14, r: 52.1, estimated: false }  # 전문 지식
  reasoning: { s: 30.0, z: -0.26, r: 46.1, estimated: false }  # 추론
  coding: { s: 27.6, z: -0.45, r: 43.2, estimated: false }  # 코딩
  agentic: { s: 44.5, z: -0.1, r: 48.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 67.8, z: -0.18, r: 47.3, estimated: false }  # 멀티모달
  long_context: { s: 71.1, z: 0.41, r: 56.1, estimated: false }  # 긴문맥
  instruction: { s: 56.0, z: 0.23, r: 53.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Qwen3.5 4B

Alibaba · Open · Small(4.7B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 추론, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 52.1 | +0.14 | 실측 | [[gpqa-diamond]] 77.0707%×0.4, [[humanitys-last-exam]] 9.91659%×0.3 |
| 추론 | 46.1 | -0.26 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 77.0707%×1.0, [[humanitys-last-exam]] 9.91659%×1.0 |
| 코딩 | 43.2 | -0.45 | 실측 | [[terminal-bench]] 18.1818%×0.5 |
| 에이전트 | 48.6 | -0.1 | 실측 | [[tau2-bench]] 92.1053%×1.0, [[tau3-banking]] 6.80412%×1.0, [[terminal-bench]] 18.1818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 47.3 | -0.18 | 실측 | [[mmmu-pro]] 65.3757%×1.0 |
| 긴문맥 | 56.1 | +0.41 | 실측 | [[aa-lcr]] 63%×1.0 |
| 지시 따르기 | 53.4 | +0.23 | 실측 | [[ifbench]] 51.9728%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
