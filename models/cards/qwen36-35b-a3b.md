---
type: Model
title: Qwen3.6 35B A3B
creator: Alibaba
license: Open
intelligence_index: 18.0
price_blended_usd_1m: 0.567
output_speed_tps: 125.0
context_window: 262000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 43.1, z: 0.04, r: 50.5, estimated: false }  # 전문 지식
  reasoning: { s: 40.3, z: 0.19, r: 52.8, estimated: false }  # 추론
  coding: { s: 51.0, z: 0.52, r: 57.8, estimated: false }  # 코딩
  agentic: { s: 48.7, z: 0.4, r: 56.0, estimated: false }  # 에이전트
  trust: { s: 48.5, z: 1.04, r: 65.6, estimated: false }  # 신뢰성
  multimodal: { s: 82.2, z: 0.57, r: 58.5, estimated: false }  # 멀티모달
  long_context: { s: 80.9, z: 0.9, r: 63.5, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.8, r: 62.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 35B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Qwen3.6 35B A3B

Alibaba · Open · Unknown · 컨텍스트 262k · 종합지능 **18.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.38 · 출력 $2.25 · 혼합 $0.567/1M · 125.0 t/s · TTFT 2.13s · 262k ctx` · 가성비 31.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.5 | +0.04 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 52.8 | +0.19 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 57.8 | +0.52 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 56.0 | +0.4 | 실측 | [[gdpval]] 19.0%×1.0, [[tau2-bench]] 95.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 65.6 | +1.04 | 실측 | [[aa-omniscience]] 49.0%×1.0 |
| 멀티모달 | 58.5 | +0.57 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 63.5 | +0.9 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 62.0 | +0.8 | 실측 | [[ifbench]] 64.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
