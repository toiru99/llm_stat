---
type: Model
title: Qwen3 235B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32768
status: past
size_class: Large
params_b: 235
is_reasoning: true
radar:
  knowledge: { s: 45.6, z: -0.06, r: 49.1, estimated: false }  # 전문 지식
  reasoning: { s: 27.7, z: -0.37, r: 44.5, estimated: false }  # 추론
  coding: { s: 9.2, z: -1.07, r: 33.9, estimated: false }  # 코딩
  agentic: { s: 16.7, z: -1.07, r: 33.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 37.3, z: -0.54, r: 41.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 235B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Qwen3 235B

Alibaba · Open · Large(235B) · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 49.1 | -0.06 | 실측 | [[gpqa-diamond]] 70%×0.4, [[humanitys-last-exam]] 10.98%×0.3 |
| 추론 | 44.5 | -0.37 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 70%×1.0, [[humanitys-last-exam]] 10.98%×1.0 |
| 코딩 | 33.9 | -1.07 | 실측 | [[terminal-bench]] 6.06061%×0.5 |
| 에이전트 | 33.9 | -1.07 | 실측 | [[tau2-bench]] 23.9766%×1.0, [[terminal-bench]] 6.06061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 41.8 | -0.54 | 실측 | [[ifbench]] 38.7075%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
