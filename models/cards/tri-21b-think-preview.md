---
type: Model
title: Tri-21B-think Preview
creator: Trillion Labs
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: past
size_class: Small
params_b: 21
is_reasoning: true
radar:
  knowledge: { s: 31.9, z: -0.72, r: 39.1, estimated: false }  # 전문 지식
  reasoning: { s: 19.1, z: -0.8, r: 38.1, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.27, r: 31.0, estimated: false }  # 코딩
  agentic: { s: 48.8, z: 0.06, r: 50.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 24.4, z: -1.02, r: 34.7, estimated: false }  # 긴문맥
  instruction: { s: 49.2, z: -0.05, r: 49.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Tri-21B-think Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Tri-21B-think Preview

Trillion Labs · Open · Small(21B) · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 39.1 | -0.72 | 실측 | [[gpqa-diamond]] 53.8384%×0.4, [[humanitys-last-exam]] 5.7924%×0.3 |
| 추론 | 38.1 | -0.8 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 53.8384%×1.0, [[humanitys-last-exam]] 5.7924%×1.0 |
| 코딩 | 31.0 | -1.27 | 실측 | [[terminal-bench]] 2.27273%×0.5 |
| 에이전트 | 50.9 | +0.06 | 실측 | [[tau2-bench]] 93.2749%×1.0, [[terminal-bench]] 2.27273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.7 | -1.02 | 실측 | [[aa-lcr]] 21.6667%×1.0 |
| 지시 따르기 | 49.2 | -0.05 | 실측 | [[ifbench]] 47.1429%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
