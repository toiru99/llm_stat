---
type: Model
title: Qwen3 VL 32B
creator: Alibaba
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 0.208
output_speed_tps: 69.0
context_window: 256000
status: past
size_class: Small
params_b: 33.4
is_reasoning: false
radar:
  knowledge: { s: 30.6, z: -0.5, r: 42.5, estimated: false }  # 전문 지식
  reasoning: { s: 25.5, z: -0.46, r: 43.1, estimated: false }  # 추론
  coding: { s: 12.1, z: -0.7, r: 39.5, estimated: false }  # 코딩
  agentic: { s: 20.7, z: -0.64, r: 40.4, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.87, r: 37.0, estimated: false }  # 신뢰성
  multimodal: { s: 68.1, z: -0.1, r: 48.4, estimated: false }  # 멀티모달
  long_context: { s: 38.4, z: -0.33, r: 45.1, estimated: true }  # 긴문맥
  instruction: { s: 38.0, z: -0.61, r: 40.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Qwen3 VL 32B

Alibaba · Open · Small(33.4B) · 컨텍스트 256k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 멀티모달, 긴문맥
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.16 · 출력 $0.64 · 혼합 $0.208/1M · 69.0 t/s · TTFT 2.61s · 256k ctx` · 가성비 24.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.5 | -0.5 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 43.1 | -0.46 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 39.5 | -0.7 | 실측 | [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 40.4 | -0.64 | 실측 | [[tau2-bench]] 29.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 37.0 | -0.87 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 48.4 | -0.1 | 실측 | [[mmmu-pro]] 64.0%×1.0 |
| 긴문맥 | 45.1 | -0.33 | 추정 | (추정) |
| 지시 따르기 | 40.8 | -0.61 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
