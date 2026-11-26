---
type: Model
title: Qwen2.5 72B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.477
output_speed_tps: 30.421561028530697
context_window: 131072
status: past
size_class: Medium
params_b: 72
is_reasoning: false
radar:
  knowledge: { s: 27.4, z: -0.94, r: 35.9, estimated: false }  # 전문 지식
  reasoning: { s: 16.3, z: -0.94, r: 35.9, estimated: false }  # 추론
  coding: { s: 6.9, z: -1.15, r: 32.7, estimated: false }  # 코딩
  agentic: { s: 20.9, z: -0.93, r: 36.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: 34.8, z: -0.65, r: 40.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 72B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Qwen2.5 72B

Alibaba · Open · Medium(72B) · 컨텍스트 131k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.475 · 출력 $0.495 · 혼합 $0.477/1M · 30.421561028530697 t/s · TTFT 1.95030031445541s · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 35.9 | -0.94 | 실측 | [[gpqa-diamond]] 49.0909%×0.4, [[humanitys-last-exam]] 3.56%×0.3 |
| 추론 | 35.9 | -0.94 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 49.0909%×1.0, [[humanitys-last-exam]] 3.56%×1.0 |
| 코딩 | 32.7 | -1.15 | 실측 | [[terminal-bench]] 4.54545%×0.5 |
| 에이전트 | 36.1 | -0.93 | 실측 | [[tau2-bench]] 34.5029%×1.0, [[terminal-bench]] 4.54545%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | 40.2 | -0.65 | 실측 | [[ifbench]] 36.8707%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
