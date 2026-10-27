---
type: Model
title: Qwen3.5 35B A3B
creator: Alibaba
license: Open
intelligence_index: 19.0
price_blended_usd_1m: 0.425
output_speed_tps: 151.0
context_window: 262000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 44.0, z: 0.04, r: 50.6, estimated: false }  # 전문 지식
  reasoning: { s: 41.2, z: 0.18, r: 52.7, estimated: false }  # 추론
  coding: { s: 40.9, z: 0.1, r: 51.5, estimated: false }  # 코딩
  agentic: { s: 39.5, z: 0.16, r: 52.5, estimated: false }  # 에이전트
  trust: { s: 13.4, z: -0.63, r: 40.6, estimated: false }  # 신뢰성
  multimodal: { s: 79.5, z: 0.36, r: 55.5, estimated: false }  # 멀티모달
  long_context: { s: 80.9, z: 0.84, r: 62.6, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.34, r: 70.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 35B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Qwen3.5 35B A3B

Alibaba · Open · Unknown · 컨텍스트 262k · 종합지능 **19.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.425/1M · 151.0 t/s · TTFT 2.04s · 262k ctx` · 가성비 44.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.6 | +0.04 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 21.0%×0.3 |
| 추론 | 52.7 | +0.18 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 21.0%×1.0 |
| 코딩 | 51.5 | +0.1 | 실측 | [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 52.5 | +0.16 | 실측 | [[itbench]] 22.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 40.6 | -0.63 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | 55.5 | +0.36 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 62.6 | +0.84 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 70.1 | +1.34 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
