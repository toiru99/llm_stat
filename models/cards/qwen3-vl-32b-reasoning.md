---
type: Model
title: Qwen3 VL 32B (Reasoning)
creator: Alibaba
license: Open
intelligence_index: 12.0
price_blended_usd_1m: 0.208
output_speed_tps: 89.0
context_window: 256000
status: past
size_class: Small
params_b: 33.4
is_reasoning: true
radar:
  knowledge: { s: 34.9, z: -0.29, r: 45.7, estimated: false }  # 전문 지식
  reasoning: { s: 29.6, z: -0.26, r: 46.1, estimated: false }  # 추론
  coding: { s: 12.1, z: -0.7, r: 39.5, estimated: false }  # 코딩
  agentic: { s: 29.3, z: -0.31, r: 45.3, estimated: false }  # 에이전트
  trust: { s: 14.4, z: -0.47, r: 42.9, estimated: false }  # 신뢰성
  multimodal: { s: 66.7, z: -0.17, r: 47.4, estimated: false }  # 멀티모달
  long_context: { s: 61.8, z: 0.39, r: 55.9, estimated: false }  # 긴문맥
  instruction: { s: 66.2, z: 0.57, r: 58.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 32B (Reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Qwen3 VL 32B (Reasoning)

Alibaba · Open · Small(33.4B) · 컨텍스트 256k · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 신뢰성, 코딩

## 실용 지표
`입력 $0.16 · 출력 $0.64 · 혼합 $0.208/1M · 89.0 t/s · TTFT 2.7s · 256k ctx` · 가성비 57.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.7 | -0.29 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 46.1 | -0.26 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 39.5 | -0.7 | 실측 | [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 45.3 | -0.31 | 실측 | [[tau2-bench]] 46.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 42.9 | -0.47 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | 47.4 | -0.17 | 실측 | [[mmmu-pro]] 63.0%×1.0 |
| 긴문맥 | 55.9 | +0.39 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 58.6 | +0.57 | 실측 | [[ifbench]] 59.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
