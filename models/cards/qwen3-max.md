---
type: Model
title: Qwen3 Max
creator: Alibaba
license: Proprietary
intelligence_index: 16.0
price_blended_usd_1m: 1.68
output_speed_tps: 58.0
context_window: 262000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 42.4, z: 0.03, r: 50.5, estimated: false }  # 전문 지식
  reasoning: { s: 31.7, z: -0.18, r: 47.3, estimated: false }  # 추론
  coding: { s: 30.3, z: -0.16, r: 47.5, estimated: false }  # 코딩
  agentic: { s: 52.5, z: 0.57, r: 58.5, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.82, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 56.2, z: 0.17, r: 52.5, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.35, r: 44.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Qwen3 Max

Alibaba · Proprietary · Unknown · 컨텍스트 262k · 종합지능 **16.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $1.2 · 출력 $6.0 · 혼합 $1.68/1M · 58.0 t/s · TTFT 2.25s · 262k ctx` · 가성비 9.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.5 | +0.03 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 47.3 | -0.18 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 47.5 | -0.16 | 실측 | [[terminal-bench]] 20.0%×0.5 |
| 에이전트 | 58.5 | +0.57 | 실측 | [[tau2-bench]] 74.0%×1.0, [[terminal-bench]] 20.0%×1.0 |
| 신뢰성 | 37.8 | -0.82 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 52.5 | +0.17 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 44.8 | -0.35 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
