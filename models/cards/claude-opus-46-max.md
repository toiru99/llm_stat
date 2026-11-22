---
type: Model
title: Claude Opus 4.6 (max)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 51.4282116922398
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 75.5, z: 1.36, r: 70.4, estimated: false }  # 전문 지식
  reasoning: { s: 60.2, z: 1.21, r: 68.2, estimated: false }  # 추론
  coding: { s: 70.1, z: 1.02, r: 65.3, estimated: false }  # 코딩
  agentic: { s: 81.5, z: 1.27, r: 69.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 81.3, z: 0.5, r: 57.6, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 57.6, z: 0.15, r: 52.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.6 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Claude Opus 4.6 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 51.4282116922398 t/s · TTFT 27.3713888496865s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.4 | +1.36 | 실측 | [[gpqa-diamond]] 89.5959595959596%×0.4, [[humanitys-last-exam]] 39.9443929564411%×0.3 |
| 추론 | 68.2 | +1.21 | 실측 | [[critpt]] 12.5714285714286%×1.0, [[gpqa-diamond]] 89.5959595959596%×1.0, [[humanitys-last-exam]] 39.9443929564411%×1.0 |
| 코딩 | 65.3 | +1.02 | 실측 | [[terminal-bench]] 46.2121212121212%×0.5 |
| 에이전트 | 69.0 | +1.27 | 실측 | [[tau2-bench]] 92.1052631578947%×1.0, [[terminal-bench]] 46.2121212121212%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.6 | +0.5 | 실측 | [[mmmu-pro]] 75.4335260115607%×1.0 |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 52.3 | +0.15 | 실측 | [[ifbench]] 53.1292517006803%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
