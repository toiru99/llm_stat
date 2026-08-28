---
type: Model
title: Seed-OSS-36B-Instruct
creator: ByteDance Seed
license: Open
intelligence_index: 19.0
price_blended_usd_1m: 0.246
output_speed_tps: 34.0
context_window: 512000
status: past
size_class: Small
params_b: 36.2
is_reasoning: true
radar:
  knowledge: { s: 36.7, z: -0.2, r: 47.0, estimated: false }  # 전문 지식
  reasoning: { s: 30.3, z: -0.21, r: 46.8, estimated: false }  # 추론
  coding: { s: 43.5, z: -0.17, r: 47.5, estimated: false }  # 코딩
  agentic: { s: 30.1, z: -0.27, r: 46.0, estimated: false }  # 에이전트
  trust: { s: 12.4, z: -0.56, r: 41.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 72.3, z: 0.7, r: 60.6, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.42, r: 43.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Seed-OSS-36B-Instruct
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Seed-OSS-36B-Instruct

ByteDance Seed · Open · Small(36.2B) · 컨텍스트 512k · 종합지능 **19.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.21 · 출력 $0.57 · 혼합 $0.246/1M · 34.0 t/s · TTFT 2.66s · 512k ctx` · 가성비 77.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.0 | -0.2 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 46.8 | -0.21 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 47.5 | -0.17 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 46.0 | -0.27 | 실측 | [[tau2-bench]] 49.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 41.6 | -0.56 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.6 | +0.7 | 실측 | [[aa-lcr]] 60.0%×1.0 |
| 지시 따르기 | 43.7 | -0.42 | 실측 | [[ifbench]] 42.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
