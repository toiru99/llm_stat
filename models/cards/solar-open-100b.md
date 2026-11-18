---
type: Model
title: Solar Open 100B
creator: Upstage
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 42.4, z: -0.24, r: 46.4, estimated: false }  # 전문 지식
  reasoning: { s: 25.8, z: -0.48, r: 42.8, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.24, r: 31.4, estimated: false }  # 코딩
  agentic: { s: 26.1, z: -0.65, r: 40.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 46.2, z: -0.22, r: 46.7, estimated: false }  # 긴문맥
  instruction: { s: 64.0, z: 0.42, r: 56.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Open 100B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Solar Open 100B

Upstage · Open · Medium · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.4 | -0.24 | 실측 | [[gpqa-diamond]] 65.6565656565657%×0.4, [[humanitys-last-exam]] 10.4263206672845%×0.3 |
| 추론 | 42.8 | -0.48 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 65.6565656565657%×1.0, [[humanitys-last-exam]] 10.4263206672845%×1.0 |
| 코딩 | 31.4 | -1.24 | 실측 | [[terminal-bench]] 2.27272727272727%×0.5 |
| 에이전트 | 40.2 | -0.65 | 실측 | [[tau2-bench]] 48.245614035087705%×1.0, [[terminal-bench]] 2.27272727272727%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 46.7 | -0.22 | 실측 | [[aa-lcr]] 41.0%×1.0 |
| 지시 따르기 | 56.4 | +0.42 | 실측 | [[ifbench]] 57.687074829931994%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
