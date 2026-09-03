---
type: Model
title: Qwen3 Omni 30B A3B
creator: Alibaba
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 0.322
output_speed_tps: 93.0
context_window: 65500
status: current
size_class: Small
params_b: 35.3
is_reasoning: false
radar:
  knowledge: { s: 27.9, z: -0.63, r: 40.6, estimated: false }  # 전문 지식
  reasoning: { s: 22.7, z: -0.6, r: 41.0, estimated: false }  # 추론
  coding: { s: 21.4, z: -1.08, r: 33.9, estimated: false }  # 코딩
  agentic: { s: 9.6, z: -1.08, r: 33.8, estimated: false }  # 에이전트
  trust: { s: 0.0, z: -1.16, r: 32.5, estimated: false }  # 신뢰성
  multimodal: { s: 56.3, z: -0.7, r: 39.5, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.53, r: 27.1, estimated: false }  # 긴문맥
  instruction: { s: 26.8, z: -1.09, r: 33.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Omni 30B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Qwen3 Omni 30B A3B

Alibaba · Open · Small(35.3B) · 컨텍스트 65k · 종합지능 **5.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 신뢰성, 긴문맥

## 실용 지표
`입력 $0.25 · 출력 $0.97 · 혼합 $0.322/1M · 93.0 t/s · TTFT 1.89s · 65k ctx` · 가성비 15.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.6 | -0.63 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 62.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 41.0 | -0.6 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 62.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 33.9 | -1.08 | 실측 | [[scicode]] 19.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 33.8 | -1.08 | 실측 | [[tau2-bench]] 16.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 32.5 | -1.16 | 실측 | [[aa-omniscience]] 2.0%×1.0 |
| 멀티모달 | 39.5 | -0.7 | 실측 | [[mmmu-pro]] 55.0%×1.0 |
| 긴문맥 | 27.1 | -1.53 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 33.6 | -1.09 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
