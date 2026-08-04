---
type: Model
title: Qwen3.5 0.8B
creator: Alibaba
license: Open
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Tiny
params_b: 0.873
is_reasoning: true
radar:
  knowledge: { s: 0.3, z: -1.93, r: 21.0, estimated: false }  # 전문 지식
  reasoning: { s: 0.4, z: -1.72, r: 24.3, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.96, r: 20.6, estimated: false }  # 코딩
  agentic: { s: 12.1, z: -0.95, r: 35.8, estimated: false }  # 에이전트
  trust: { s: 71.3, z: 2.0, r: 80.0, estimated: false }  # 신뢰성
  multimodal: { s: 15.7, z: -2.7, r: 9.5, estimated: false }  # 멀티모달
  long_context: { s: 6.6, z: -1.27, r: 30.9, estimated: false }  # 긴문맥
  instruction: { s: 12.7, z: -1.67, r: 24.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 0.8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-04
timestamp: 2026-08-04T00:00:00Z
---

# Qwen3.5 0.8B

Alibaba · Open · Tiny(0.873B) · 컨텍스트 262k · 종합지능 **5.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 21.0 | -1.93 | 실측 | [[aa-omniscience]] 1.0%×1.0, [[gpqa-diamond]] 11.0%×0.4, [[humanitys-last-exam]] 1.0%×0.3 |
| 추론 | 24.3 | -1.72 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 11.0%×1.0, [[humanitys-last-exam]] 1.0%×1.0 |
| 코딩 | 20.6 | -1.96 | 실측 | [[scicode]] 0.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 35.8 | -0.95 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 48.0%×1.0, [[tau3-banking]] 0.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 80.0 | +2.0 | 실측 | [[aa-omniscience]] 63.0%×1.0 |
| 멀티모달 | 9.5 | -2.7 | 실측 | [[mmmu-pro]] 26.0%×1.0 |
| 긴문맥 | 30.9 | -1.27 | 실측 | [[aa-lcr]] 5.0%×1.0 |
| 지시 따르기 | 24.9 | -1.67 | 실측 | [[ifbench]] 21.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
