---
type: Model
title: Seed-OSS-36B-Instruct
creator: ByteDance Seed
license: Open
intelligence_index: 18.0
price_blended_usd_1m: 0.25
output_speed_tps: 36.0
context_window: 512000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 37.0, z: -0.16, r: 47.6, estimated: false }  # 전문 지식
  reasoning: { s: 30.1, z: -0.17, r: 47.4, estimated: false }  # 추론
  coding: { s: 43.5, z: -0.1, r: 48.4, estimated: false }  # 코딩
  agentic: { s: 30.1, z: -0.24, r: 46.4, estimated: false }  # 에이전트
  trust: { s: 18.8, z: -0.43, r: 43.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 76.3, z: 0.83, r: 62.4, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.42, r: 43.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Seed-OSS-36B-Instruct
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-13
timestamp: 2026-07-13T00:00:00Z
---

# Seed-OSS-36B-Instruct

ByteDance Seed · Open · Unknown · 컨텍스트 512k · 종합지능 **18.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.21 · 출력 $0.57 · 혼합 $0.25/1M · 36.0 t/s · TTFT 3.0s · 512k ctx` · 가성비 72.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.6 | -0.16 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 47.4 | -0.17 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 48.4 | -0.1 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 46.4 | -0.24 | 실측 | [[tau2-bench]] 49.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 43.6 | -0.43 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.4 | +0.83 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 43.7 | -0.42 | 실측 | [[ifbench]] 42.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
