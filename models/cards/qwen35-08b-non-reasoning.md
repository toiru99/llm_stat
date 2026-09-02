---
type: Model
title: Qwen3.5 0.8B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 3.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Tiny
params_b: 0.873
is_reasoning: false
radar:
  knowledge: { s: 9.5, z: -1.54, r: 27.0, estimated: false }  # 전문 지식
  reasoning: { s: 7.8, z: -1.34, r: 30.0, estimated: false }  # 추론
  coding: { s: 3.2, z: -1.84, r: 22.4, estimated: false }  # 코딩
  agentic: { s: 21.9, z: -0.6, r: 41.1, estimated: false }  # 에이전트
  trust: { s: 0.0, z: -1.16, r: 32.6, estimated: false }  # 신뢰성
  multimodal: { s: 15.7, z: -2.71, r: 9.3, estimated: false }  # 멀티모달
  long_context: { s: 10.8, z: -1.19, r: 32.1, estimated: false }  # 긴문맥
  instruction: { s: 14.1, z: -1.62, r: 25.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 0.8B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Qwen3.5 0.8B (Non-reasoning)

Alibaba · Open · Tiny(0.873B) · 컨텍스트 262k · 종합지능 **3.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 27.0 | -1.54 | 실측 | [[aa-omniscience]] 5.0%×1.0, [[gpqa-diamond]] 24.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 30.0 | -1.34 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 24.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 22.4 | -1.84 | 실측 | [[scicode]] 3.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 41.1 | -0.6 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 65.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 32.6 | -1.16 | 실측 | [[aa-omniscience]] 2.0%×1.0 |
| 멀티모달 | 9.3 | -2.71 | 실측 | [[mmmu-pro]] 26.0%×1.0 |
| 긴문맥 | 32.1 | -1.19 | 실측 | [[aa-lcr]] 9.0%×1.0 |
| 지시 따르기 | 25.7 | -1.62 | 실측 | [[ifbench]] 22.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
