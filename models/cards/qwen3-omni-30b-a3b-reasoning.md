---
type: Model
title: Qwen3 Omni 30B A3B (Reasoning)
creator: Alibaba
license: Open
intelligence_index: 10.0
price_blended_usd_1m: 0.322
output_speed_tps: 101.0
context_window: 65500
status: current
size_class: Small
params_b: 35.3
is_reasoning: true
radar:
  knowledge: { s: 32.4, z: -0.4, r: 44.0, estimated: false }  # 전문 지식
  reasoning: { s: 28.2, z: -0.33, r: 45.1, estimated: false }  # 추론
  coding: { s: 35.4, z: -0.49, r: 42.6, estimated: false }  # 코딩
  agentic: { s: 13.6, z: -0.92, r: 36.1, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.73, r: 39.1, estimated: false }  # 신뢰성
  multimodal: { s: 63.4, z: -0.35, r: 44.7, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.53, r: 27.1, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.39, r: 44.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Omni 30B A3B (Reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Qwen3 Omni 30B A3B (Reasoning)

Alibaba · Open · Small(35.3B) · 컨텍스트 65k · 종합지능 **10.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 멀티모달
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.25 · 출력 $0.97 · 혼합 $0.322/1M · 101.0 t/s · TTFT 1.91s · 65k ctx` · 가성비 31.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.0 | -0.4 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 45.1 | -0.33 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 42.6 | -0.49 | 실측 | [[scicode]] 31.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 36.1 | -0.92 | 실측 | [[tau2-bench]] 21.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 39.1 | -0.73 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 44.7 | -0.35 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 27.1 | -1.53 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 44.2 | -0.39 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
