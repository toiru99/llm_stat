---
type: Model
title: GLM-4.7-Flash
creator: Z AI
license: Open
intelligence_index: 23.0
price_blended_usd_1m: 0.103
output_speed_tps: 100.0
context_window: 200000
status: past
size_class: Small
params_b: 31.2
is_reasoning: false
radar:
  knowledge: { s: 29.5, z: -0.54, r: 41.9, estimated: false }  # 전문 지식
  reasoning: { s: 23.4, z: -0.57, r: 41.4, estimated: false }  # 추론
  coding: { s: 48.9, z: 0.06, r: 50.9, estimated: false }  # 코딩
  agentic: { s: 66.7, z: 1.22, r: 68.3, estimated: false }  # 에이전트
  trust: { s: 4.7, z: -0.99, r: 35.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 49.4, z: -0.0, r: 50.0, estimated: false }  # 긴문맥
  instruction: { s: 69.0, z: 0.63, r: 59.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.7-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# GLM-4.7-Flash

Z AI · Open · Small(31.2B) · 컨텍스트 200k · 종합지능 **23.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.07 · 출력 $0.4 · 혼합 $0.103/1M · 100.0 t/s · TTFT 1.53s · 200k ctx` · 가성비 223.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.9 | -0.54 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 58.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 41.4 | -0.57 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 58.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 50.9 | +0.06 | 실측 | [[scicode]] 34.0%×1.0, [[terminal-bench]] 22.0%×0.5 |
| 에이전트 | 68.3 | +1.22 | 실측 | [[tau2-bench]] 99.0%×1.0, [[terminal-bench]] 22.0%×1.0 |
| 신뢰성 | 35.2 | -0.99 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 50.0 | +-0.0 | 실측 | [[aa-lcr]] 41.0%×1.0 |
| 지시 따르기 | 59.5 | +0.63 | 실측 | [[ifbench]] 61.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
