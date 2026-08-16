---
type: Model
title: Qwen3 Coder 480B
creator: Alibaba
license: Open
intelligence_index: 18.0
price_blended_usd_1m: 2.1
output_speed_tps: 67.0
context_window: 262000
status: past
size_class: Large
params_b: 480
is_reasoning: false
radar:
  knowledge: { s: 29.5, z: -0.56, r: 41.7, estimated: false }  # 전문 지식
  reasoning: { s: 22.9, z: -0.61, r: 40.8, estimated: false }  # 추론
  coding: { s: 49.6, z: 0.06, r: 50.9, estimated: false }  # 코딩
  agentic: { s: 36.6, z: 0.0, r: 50.0, estimated: false }  # 에이전트
  trust: { s: 61.6, z: 1.53, r: 72.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 54.2, z: 0.12, r: 51.7, estimated: false }  # 긴문맥
  instruction: { s: 39.4, z: -0.6, r: 41.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Coder 480B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-16
timestamp: 2026-08-16T00:00:00Z
---

# Qwen3 Coder 480B

Alibaba · Open · Large(480B) · 컨텍스트 262k · 종합지능 **18.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $1.5 · 출력 $7.5 · 혼합 $2.1/1M · 67.0 t/s · TTFT 2.98s · 262k ctx` · 가성비 8.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.7 | -0.56 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 62.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 40.8 | -0.61 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 62.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 50.9 | +0.06 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 19.0%×0.5 |
| 에이전트 | 50.0 | +0.0 | 실측 | [[tau2-bench]] 44.0%×1.0, [[terminal-bench]] 19.0%×1.0 |
| 신뢰성 | 72.9 | +1.53 | 실측 | [[aa-omniscience]] 55.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 51.7 | +0.12 | 실측 | [[aa-lcr]] 45.0%×1.0 |
| 지시 따르기 | 41.0 | -0.6 | 실측 | [[ifbench]] 40.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
