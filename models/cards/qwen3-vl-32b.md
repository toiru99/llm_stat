---
type: Model
title: Qwen3 VL 32B
creator: Alibaba
license: Open
intelligence_index: 8.0
price_blended_usd_1m: 0.208
output_speed_tps: 65.0
context_window: 256000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 30.5, z: -0.53, r: 42.1, estimated: false }  # 전문 지식
  reasoning: { s: 25.4, z: -0.48, r: 42.9, estimated: false }  # 추론
  coding: { s: 12.1, z: -0.79, r: 38.1, estimated: false }  # 코딩
  agentic: { s: 20.7, z: -0.66, r: 40.2, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.91, r: 36.3, estimated: false }  # 신뢰성
  multimodal: { s: 67.1, z: -0.16, r: 47.5, estimated: false }  # 멀티모달
  long_context: { s: 38.4, z: -0.37, r: 44.4, estimated: true }  # 긴문맥
  instruction: { s: 38.0, z: -0.64, r: 40.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Qwen3 VL 32B

Alibaba · Open · Small · 컨텍스트 256k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 멀티모달, 긴문맥
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.16 · 출력 $0.64 · 혼합 $0.208/1M · 65.0 t/s · TTFT 2.56s · 256k ctx` · 가성비 38.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.1 | -0.53 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 42.9 | -0.48 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 38.1 | -0.79 | 실측 | [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 40.2 | -0.66 | 실측 | [[tau2-bench]] 29.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 36.3 | -0.91 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 47.5 | -0.16 | 실측 | [[mmmu-pro]] 64.0%×1.0 |
| 긴문맥 | 44.4 | -0.37 | 추정 | (추정) |
| 지시 따르기 | 40.4 | -0.64 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
