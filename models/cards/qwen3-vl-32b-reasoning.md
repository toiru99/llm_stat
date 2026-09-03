---
type: Model
title: Qwen3 VL 32B (Reasoning)
creator: Alibaba
license: Open
intelligence_index: 18.0
price_blended_usd_1m: 0.208
output_speed_tps: 89.0
context_window: 256000
status: past
size_class: Small
params_b: 33.4
is_reasoning: true
radar:
  knowledge: { s: 35.1, z: -0.27, r: 45.9, estimated: false }  # 전문 지식
  reasoning: { s: 29.9, z: -0.24, r: 46.4, estimated: false }  # 추론
  coding: { s: 34.1, z: -0.54, r: 41.9, estimated: false }  # 코딩
  agentic: { s: 29.3, z: -0.32, r: 45.3, estimated: false }  # 에이전트
  trust: { s: 14.4, z: -0.48, r: 42.8, estimated: false }  # 신뢰성
  multimodal: { s: 67.6, z: -0.14, r: 47.9, estimated: false }  # 멀티모달
  long_context: { s: 68.7, z: 0.56, r: 58.4, estimated: false }  # 긴문맥
  instruction: { s: 66.2, z: 0.55, r: 58.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 32B (Reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Qwen3 VL 32B (Reasoning)

Alibaba · Open · Small(33.4B) · 컨텍스트 256k · 종합지능 **18.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 신뢰성, 코딩

## 실용 지표
`입력 $0.16 · 출력 $0.64 · 혼합 $0.208/1M · 89.0 t/s · TTFT 2.72s · 256k ctx` · 가성비 86.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.9 | -0.27 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 46.4 | -0.24 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 41.9 | -0.54 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 45.3 | -0.32 | 실측 | [[tau2-bench]] 46.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 42.8 | -0.48 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | 47.9 | -0.14 | 실측 | [[mmmu-pro]] 63.0%×1.0 |
| 긴문맥 | 58.4 | +0.56 | 실측 | [[aa-lcr]] 57.0%×1.0 |
| 지시 따르기 | 58.3 | +0.55 | 실측 | [[ifbench]] 59.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
